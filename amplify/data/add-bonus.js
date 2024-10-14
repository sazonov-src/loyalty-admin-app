// delete-last-five.js
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    operation: 'UpdateItem',
    key: util.dynamodb.toMapValues({ id: ctx.args.owner }),
    update: {
      expression: 'ADD bonusPoints :plusOne',
      expressionValues: { ':plusOne': { N: 1 } },
    }
  }
}

export function response(ctx) {
  return ctx.result
}

