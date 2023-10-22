const mongoose=require('mongoose');

const priviousgCampaign= new mongoose.Schema({

    CampaignID:{type:String},
    CampaignName:{type:String},
    CampaignImageURL:{type:String},
    CampaignInformation:{type:String}

});

const PriviousgCampaign=new mongoose.model('PriviousgCampaign',priviousgCampaign);
module.exports=PriviousgCampaign;