import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const service = new ListUserSendComplimentsService();

    const user = await service.execute(user_id);
    return response.json(user);
  }

}

export { ListUserSendComplimentsController };
