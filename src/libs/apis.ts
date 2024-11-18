import sanityClient from "./sanity";
import * as quries from "./SanityQueries";

export async function getFeaturedRoom() {
    const result = await sanityClient.fetch(
        quries.getFeaturedRoomQuery, 
        {}, 
        { cache: 'no-cache' },
        // { next: {revalidate: 1800} } //30 min
    );
    return result;
}