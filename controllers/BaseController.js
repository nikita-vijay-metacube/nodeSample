class BaseController {

    static welcome(req,res)
    {
        let pageTitle = '';
        
        if(req.path === "/")
            pageTitle = "Home";

        res.render('index',{content:"<h3 class='text-center'><I>Quarter 3 Node Sample CRUD APP</u></h3><h5 class='text-primary text-center'><u>Click On links.</u></h5>", pageTitle : pageTitle,alertMsg : ''})
    }
    
    static SHOWVIEW(req,res,content)
    {
        let pageTitle_1 = req.path.split('/')[1];
        let pageTitle = pageTitle_1.charAt(0).toUpperCase() + pageTitle_1.slice(1);
        
        res.render('index',{content:content, pageTitle:pageTitle})
    }

    static STRINGSEPARATOR(string, separator)
    {
        let array = string.split(separator);
        return JSON.stringify(array);
    }
}

export default BaseController;