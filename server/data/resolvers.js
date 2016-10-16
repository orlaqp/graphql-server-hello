import { Author, View, getFortuneCookie } from './connectors';

const resolvers = {
    Query: {
        author(_, args) {
            return Author.find({ where: args });
        },
        getFortuneCookie(_, args) {
            return getFortuneCookie.getOne();
        }
    },

    Author: {
        posts(author) {
            return author.getPosts();
        },
    },

    Post: {
        author(post) {
            return post.getAuthor(); 
        },
        views(post) {
            return View.findOne({ postId: post.id })
                    .then((view) => view.views );
        }
    }
}

export default resolvers;
