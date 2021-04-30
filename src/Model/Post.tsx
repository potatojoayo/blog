import {Category} from "../global";

export interface PostType {
	title: string;
	subTitle: string;
	content: string;
	repImage: string;
	tags: string[];
	date: Date;
	_id: number;
	category: Category
}

class Post implements PostType {
	constructor(public title: string,
		public subTitle: string,
		public content: string,
		public repImage: string,
		public tags: string[],
		public date: Date,
		public _id: number,
		public category: Category,

	) {
		this.title = title;
		this.subTitle = subTitle;
		this.content = content;
		this.repImage = repImage;
		this.tags = tags;
		this.date = date;
		this._id = _id;
		this.category = category
	}
}



export default Post;
