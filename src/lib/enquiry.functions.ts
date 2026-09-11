import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./enquiry-schema";
import { sendEnquiryEmail } from "./email.server";

export const submitEnquiry = createServerFn({
  method: "POST",
})
  .validator(enquirySchema)
  .handler(async ({ data }) => {
    await sendEnquiryEmail(data);

    return {
      success: true,
    };
  });
