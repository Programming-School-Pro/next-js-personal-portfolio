import { NextApiRequest, NextApiResponse } from "next";

import { supabaseClient } from "@/domains/Supabase";
import { PostDetails } from "@/typings/blog";

/**
 * @api {post} /api/page/add-view Add view to page using RPC in Supabase
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { page_slug } = req.body;

		const { data: view_count, error } = await supabaseClient.rpc<PostDetails["view_count"]>(
			"upsert_page_view",
			{
				page_slug,
			}
		);

		if (error) {
			res.status(500).send(error);
		} else {
			res.status(200).send({ view_count });
		}
	} else {
		res.status(400).send("Bad request");
	}
};
