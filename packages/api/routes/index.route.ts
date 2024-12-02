import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/create-app.ts";

const router = createRouter()
   .openapi(
      createRoute({
         tags: ["Index"],
         method: "get",
         path: "/",
         responses: {
            [HttpStatusCodes.OK]: jsonContent(
               createMessageObjectSchema("Neighbourhoods Sold Reports API"),
               "Neighbourhoods Sold Report API Index",
            ),
         },
      }),
      (c) => {
         return c.json({
            message: "Neighbourhoods Sold Report API",
         }, HttpStatusCodes.OK);
      },
   );

export default router;