// deduct-points.js
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    operation: 'UpdateItem',
    key: util.dynamodb.toMapValues({ id: ctx.args.owner }),
    update: {
      expression: 'SET #points = if_not_exists(#points, :initial) - :decrement',
      expressionNames: {
        '#points': 'bonusPoints'
      },
      expressionValues: {
        ':decrement': { N: `${ctx.args.decrement}` },
        ':initial': { N: '0' }
      }
    },
    condition: {
      expression: '#points >= :decrement',
      expressionNames: {
        '#points': 'bonusPoints'
      },
      expressionValues: {
        ':decrement': { N: `${ctx.args.decrement}` }
      }
    }
  };
}

export function response(ctx) {
  console.log(ctx);
  return ctx.result;
}
