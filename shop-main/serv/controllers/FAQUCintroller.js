import Faqu from '../data/FAQU.js'

class FAQUController{
async getAll(req,res){
    try{
        const posts=await Faqu.find()
        return res.json(posts.slice(0,50))
    }catch(e){
        res.status(500).json(e.message)
    }
    }
}
export default new FAQUController();