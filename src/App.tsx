import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from "aws-amplify/data";
import { 
  useState, useEffect
} from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { type Schema } from "../amplify/data/resource";

const wrighOff = [5, 7, 10];
const client = generateClient<Schema>();

type CustomerSchema = Schema["Bonuses"]["type"];

interface CustomerStateType {
  customer: CustomerSchema;
  setCustomer: (value: CustomerSchema) => void;
}

interface ButtonAlertDialogProps {
  children: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function MyAlertDialog({children, title, description, onClick}: ButtonAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onClick}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function SetBonusButton({customer, setCustomer}: CustomerStateType) {
  const { toast } = useToast();
  
  function setBonus() {
    client
      .mutations.AddBonus({
        id: customer.id,
      }).then(({ data }) => {
        if (data) {
          setCustomer(data);
        } 
        toast(data ? {
          title: "Success",
          description: "Bonus added"
        } : {
          title: "Error",
          description: "Bonus not added",
          variant: "destructive",
        })
      }).catch((err) => alert(err));
  };

  return (
    <MyAlertDialog
      title="Set Bonus"
      description="Are you sure you want to set bonus?"
      onClick={setBonus}
    >
      <Button
        variant="default"
        size="lg"
      >
        Set Bonus
      </Button>
    </MyAlertDialog>
  );
}

function WriteOffBonusesButton(
  {customer, setCustomer, count}: CustomerStateType & { count: number }) {
  const { toast } = useToast();

  
  function writeOffBonuses() {
    client
      .mutations.WriteOffBonuses({
        id: customer.id,
        decrement: count
      }).then(({ data }) => {
        if (data) {
          setCustomer(data);
        } 
        toast( data ? { 
          title: "Success", 
          description: `${ count } bonuses have been written off`
        } : {
          title: "Error",
          description: "Customer not found",
          variant: "destructive",
        })

      }).catch((err) => alert(err));
  };

  return  (
    <MyAlertDialog
      title="Write Off Bonuses"
      description="Are you sure you want to write off {count} bonuses?"
      onClick={writeOffBonuses}
    >
      <Button
        variant="outline"
        size="sm"
      >
        Write Off {count} Bonuses
      </Button>
    </MyAlertDialog>
  );
}

export default function App() {

  const [ customer, setCustomer ] = useState<CustomerSchema | null>(null);
  const { toast } = useToast();
  const newWriteOff = wrighOff.filter((num) => customer?.bonusPoints && customer.bonusPoints >= num);

  console.log({ newWriteOff });

  useEffect(() => {
  }, [customer]);

  function getCustomer(customerId: string) {
    client
      .models.Bonuses.get({ 
        id: customerId,
      })
      .then(({ data }) => {
          toast( data ? { 
            title: "Success", 
            description: "Customer found"
          } : {
            title: "Error",
            description: "Customer not found",
            variant: "destructive",
          })
        setCustomer(data)
      })
      .catch((err) => alert(err));
  }

  return (
      <div className="flex flex-col items-center justify-center h-screen"> 
      <Authenticator>
        {({ signOut }) => (
          <> 
            { customer ? (
              <Card className=''>
                <CardHeader className='flex flex-col items-center justify-center'>
                  <CardTitle>Бонуси клієнта</CardTitle>
                  <CardDescription>{ customer.id }</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center'>
                  <p className='text-5xl font-bold'>{ customer.bonusPoints }</p>
                </CardContent>
                <CardFooter className='flex flex-col items-center justify-center'>
                  <SetBonusButton {...{ customer, setCustomer }}/>
                  { newWriteOff.length > 0 && (
                    <>
                    <Separator className="my-5" />
                    <div className='flex space-x-4'>
                    { newWriteOff.map((num) => (
                      <WriteOffBonusesButton 
                      {...{ 
                        customer, 
                        setCustomer, 
                        count: num }}/>
                    ))}
                    </div>
                    </>
                  )}
                </CardFooter>
              </Card>
            ) : (
              <div className="w-[500px] h-[500px]">
                <Scanner onScan={
                  (result) => getCustomer(
                    result[0].rawValue.toString()
                    // "b7d5ada8-2044-4ffe-9ce0-45281049d0f7"
                  )} />
              </div>
            )}
              <Button 
                 onClick={ () => setCustomer(null) }
                 className='m-12'
              > 
                Завершити сеанс
              </Button>

              <Button onClick={ signOut } variant='link' >
                Вихід
              </Button>
          </>
        )}
      </Authenticator>
    </div>
  );
}
