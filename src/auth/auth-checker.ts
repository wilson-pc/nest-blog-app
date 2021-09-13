import { Context } from 'src/ context';
import { verify } from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql';
import { Payload } from 'src/payload';
export const authChecker: AuthChecker<Context> = ({
  context: { req, prisma },
}) => {
  const Authorization = req.headers.authorization;
  if (Authorization) {
    // if `@Authorized()`, check only is user exist
    try {
      const token = Authorization.replace('Bearer ', '');
      const verifiedToken = verify(token, 'secrect') as Payload;

      req.user = verifiedToken;

      return true;
    } catch {
      throw false;
    }
  }
  // there are some roles defined now

  return false;
};
