"use server";
import { auth } from "@clerk/nextjs/server";
import {z} from "zod";

const uploadShortSchema = z.object({
    title:z.string().min(3),
    description:z.string().min(5),
    video:z.string(),
});

type uploadShortsState = {
    errors:{
        title?: string[];
        description?: string[];
        video?: string[];
        formErrors?: string[];
    }
}
const uploadSHoortsAction = async (prevState:uploadShortsState,formData: FormData) : Promise<uploadShortsState> => {
    const result = uploadShortSchema.safeParse({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        video: formData.get("video"),
    });

    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors as uploadShortsState['errors']
        }
    }

    //clerk authantication
    const userId =await auth();

    return {
        errors:{}
    }
}
