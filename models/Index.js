const User = require("./User");
const Group = require("./Group");
const Event = require("./Event");
const Tripgroup = require("./TripGroup");
const Eventgroup = require("./EventGroup");
const Projectgroup = require("./ProjectGroup");
const Eventpart = require("./EventPart");
const Trippart = require("./TripPart");
const Projectpart = require("./ProjectPart");
const Usergroup = require("./UserGroup");

User.belongsToMany(Group,{
    through:Usergroup,
    onDelete:"CASCADE",
});
Group.belongsTo(User,{
    as:'Owner'
})

Group.belongsToMany(User,{
    through:Usergroup
});










module.exports={
    User,
    Group,
    Event,
    Eventgroup,
    Projectgroup,
    Tripgroup,
    Eventpart,
    Projectpart,
    Trippart,
    Usergroup
}