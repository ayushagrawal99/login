


module.exports = {
    logIn: async (req,res) => {
        try{
            let post = await Post.findById(req.body.post);
    
            if(post){
                let comment = await Comment.create({
                    content : req.body.content,
                    user : req.user.id,
                    post : req.body.post
                });
    
                post.comments.push(comment);
                post.save();
    
                comment = await comment.populate('user','name email avatar').execPopulate();
         
                if(req.xhr){
                    return res.json(200,{
                        data : {
                            comment : comment
                        },
                        message : 'comment created'
                    })
                }
    
                req.flash('success','Comment created Successfully');
                return res.redirect('back');
            } else {
                return res.redirect('back');
            }
        } catch(err){
            console.log("error in comment creation",err);
            return;
        }
    }
};