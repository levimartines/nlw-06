import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const service = new ListUserReceiveComplimentsService();

    const user = await service.execute(user_id);
    return response.json(user);
  }

}

export { ListUserReceiveComplimentsController };
