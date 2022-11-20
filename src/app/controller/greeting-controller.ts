import { HelloRequest, HelloResponse } from "../model/dto";
import { Body, Get, Post, Route } from "tsoa";
import { helloThere } from "../service/greeting-service";

@Route("/v1/greeting")
export class GreetingController {
  @Get("/hi")
  public async hi(): Promise<string> {
    return Promise.resolve("hi");
  }

  @Post("/hello")
  public async hello(@Body() request: HelloRequest): Promise<HelloResponse> {
    return Promise.resolve({ hiBack: helloThere(request.hi) });
  }
}
