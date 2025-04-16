var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/applications.js
var applications_exports = {};
__export(applications_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(applications_exports);
var import_client = require("@prisma/client");
var prisma;
if (!global.prisma) {
  global.prisma = new import_client.PrismaClient();
}
prisma = global.prisma;
async function handler(event, context) {
  const { httpMethod, body } = event;
  if (httpMethod === "GET") {
    try {
      const applications = await prisma.application.findMany();
      return {
        statusCode: 200,
        body: JSON.stringify(applications)
      };
    } catch (error) {
      console.error("Error fetching applications:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch applications" })
      };
    }
  }
  if (httpMethod === "POST") {
    try {
      const data = JSON.parse(body);
      const application = await prisma.application.create({
        data
      });
      return {
        statusCode: 201,
        body: JSON.stringify(application)
      };
    } catch (error) {
      console.error("Error saving application:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to save application" })
      };
    }
  }
  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=applications.js.map
