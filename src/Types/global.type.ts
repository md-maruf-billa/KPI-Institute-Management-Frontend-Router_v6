export type TResponse ={
      error?:{
            status: number,
            data: {
                  message: string,

            },

      },
      data?:{
            success: boolean,
            message: string,
            data?: any,
      }

}


