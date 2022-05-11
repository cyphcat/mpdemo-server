import {NextFunction, Request, RequestHandler, Response} from "express";

export function asyncHandler(handler: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  };
}
