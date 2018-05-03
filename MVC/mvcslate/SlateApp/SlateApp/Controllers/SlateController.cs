using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using SlateApp.Models;

namespace SlateApp.Controllers
{
    public class SlateController : Controller
    {
        SlateMasterEntities db = new SlateMasterEntities();
        // GET: Slate

        public ActionResult sender(string name)
        {
       // string rname = name;
            return View();
        }
        public ActionResult receiver(string name)
        {
            // string rname = name;
            return View();
        }
        public JsonResult getcountry(string name)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.Countries
                        where c.Country_Name.Contains(name)
                        select new
                        {
                            Country_Code = c.Country_Code,
                            Country_Name = c.Country_Name
                           

                        }).ToList();

            return Json(data ,JsonRequestBehavior.AllowGet);
        }
        public JsonResult getcity(string code,string name)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.Cities
                        where c.City_Name.Contains(name) && c.Country_Code==code
                        select new
                        {
                            City_Code = c.City_Code,
                            City_Name = c.City_Name

                        }).ToList();

            return Json(data, JsonRequestBehavior.AllowGet);
        }


        public JsonResult gethotel(string Countrycode, string Citycode, string name)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.Hotels
                        where c.Hotel_Name.Contains(name) && c.Country_Code == Countrycode && c.City_Code==Citycode
                        select new
                        {
                            Hotel_Code = c.Hotel_Code,
                            Hotel_Name = c.Hotel_Name

                        }).ToList();

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult gethoteldetails( string code)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";
            int hcode = Convert.ToInt32(code);
            var data = db.Hotels.Where(x => x.Hotel_Code == hcode).ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        public JsonResult saveSlate(SlateDetailsTable slatedetials)
        {

            db.SlateDetailsTables.Add(slatedetials);
            db.SaveChanges();
            return Json("Success", JsonRequestBehavior.AllowGet);
        }

       public JsonResult createSlate(Channel_Slate_details chanel_Slate)
        {
            var checkslate = db.Channel_Slate_details.Where(x => x.SlateID == chanel_Slate.SlateID && x.ChannelName == chanel_Slate.ChannelName).ToList();
            if (checkslate.Count ==0)
            {
                db.Channel_Slate_details.Add(chanel_Slate);
                db.SaveChanges();
                return Json("Success", JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("fail", JsonRequestBehavior.AllowGet);

            }
           
        }
        public JsonResult gethistory(string id,string Chname)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.SlateDetailsTables
                        where c.SlateID==id && c.ChannelName==Chname orderby c.Id descending 
                        select new
                        {
                            State= c.State,
                          
                        }).ToList();

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CopySlateData(string fromId, string toId, string Chname)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.SlateDetailsTables
                        where c.SlateID == fromId && c.ChannelName == Chname
                        orderby c.Id descending
                        select new
                        {
                            State = c.State,
                            ClientID = c.ClientID
                        }).ToList();
            if (data.Count > 0)
            {
              
               foreach(var item  in data)
                {
                    SlateDetailsTable slatedetials = new SlateDetailsTable();
                    slatedetials.ClientID = item.ClientID;
                    slatedetials.ChannelName = Chname;
                    slatedetials.State = item.State;
                    slatedetials.SlateID = toId;
                    db.SlateDetailsTables.Add(slatedetials);
                    db.SaveChanges();
                }
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            else {
                return Json("NoData", JsonRequestBehavior.AllowGet);
            }
           
        }
        public JsonResult getslatelist( string Chname)
        {
            //var data = "select [Country_Code],[Country_Name]   FROM [SlateMaster].[dbo].[Country] where Country_Name like ' % " + name + " % '";

            var data = (from c in db.Channel_Slate_details
                        where  c.ChannelName == Chname
                        select new
                        {
                            SlateID = c.SlateID,

                        }).Distinct();

            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
          

}