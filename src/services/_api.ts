import axios, { AxiosResponse } from "axios";


export const api = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API,
   timeout: 30000,
});

export function sendRequest(req: Promise<AxiosResponse>): Promise<any> {
      return new Promise(async (resolve, reject) => {
         try {
            const resp = await req;
            return resolve(resp.data);
         } catch (e: any) {
            console.error(">>> ServiceBase.sendRequest ERROR: ", e);
            if (!e.response?.status) {
               for (const key in e) {
                  console.warn(">>> Error contém ", key);
               }
            }
            if (e.response?.data) {
               return reject(e.response.data);
            }
            return reject(e);
         }
      });
   }

  