import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getALLIncomeReports(){
    return [];
  }
  @Get('hello')
  getALLIncomeReports2(){
    return {};
  }
  }

  //localhost:3000/ + hi + controller method + method decorators
   
  //localhost:3000/ + report/income
