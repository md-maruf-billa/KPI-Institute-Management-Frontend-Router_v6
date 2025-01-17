import * as z from "zod";

export const academicSemesterSchema = z.object({
   code: z.string().nonempty("Semester code is required"),
   year: z.string().nonempty("Year is required"),
   startMonth: z.string().nonempty("Start month is required"),
   endMonth: z.string().nonempty("End month is required"),
});
