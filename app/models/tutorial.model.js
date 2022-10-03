module.exports=mongoose => {
    var schema=mongoose.Schema(
        mongoose.Schema(
            {
                // title: String,
                // descreption: String,
                // published: Boolean,
                location: Array,
                state: String,



            },

            {timeStamps: true}
        )
    )

    schema.method("toJSON",function() {
        const {_v,_id,...object}=this.toObject();
        object.id=_id;
        return object;
    })

    const Tutorial=mongoose.model(
        "anandMarga",
        schema
    )
    return Tutorial;
}