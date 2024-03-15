class DataService{

   async getRestorants(): Promise<any[]>{
    return await (await fetch('.netlify/functions/restorants')).json();
   }

}

export const dataService = new DataService();