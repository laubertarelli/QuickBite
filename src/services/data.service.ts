class DataService{

   async getRestorants(): Promise<any[]>{
    return await (await fetch('/api/restorants')).json();
   }

}

export const dataService = new DataService();