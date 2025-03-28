import Admin from "../model/admin.model.js";
export const signOutAction = (request,response,next)=>{
  request.session.currentUser = null;
  request.session.isLoggedIn = false;
  request.session.destroy();
  return response.redirect("/");
}
export const signInAction = (request,response,next)=>{
    let {email,password} = request.body;
    let admin = new Admin(null,email,password);
    admin.signIn()
    .then(result=>{
      if(result.length){
        request.session.currentUser = email;
        request.session.isLoggedIn = true;
        return response.redirect("/admin/dashboard");
      }
      else
       return response.redirect("/");
    }).catch();
};

export const dashboardPage = (request,response,next)=>{
  return response.render("dashboard.ejs");
}