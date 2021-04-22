class Post {
	constructor(public title: string,
		public subTitle: string,
		public content: string,
		public repImage: string,
		public tags: string[],
		public date: Date,
		public id: number,

	) {
		this.title = title;
		this.subTitle = subTitle;
		this.content = content;
		this.repImage = repImage;
		this.tags = tags;
		this.date = date;
		this.id = id;
	}
}



export default Post;
