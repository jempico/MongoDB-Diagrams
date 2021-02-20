conn = new Mongo("localhost");
db = conn.getDB("optica_jempi_mo");

db.createCollection('provider')
db.createCollection('client')
db.createCollection('product')
db.createCollection('brand')


db.provider.insertOne({
    "_id" : ObjectId("52ffc33cd85242f436000001"),
    "name" : "Prosun Optica",
    "nif" : "B9153252N",
    "contact" : {
                "telf" : "913456789",
                "fax" : "9134567890"
            },
    "address" : { 
                "street" : "Av Sevilla",
                "building" : "130",
                "zipcode" : "41001",
            },
    "city" : "Sevilla",
    "products_id" : ["JC4340601"]
})


db.brand.insertOne({
    "_id" : ObjectId("12ffc33cd85242f436000000"),
    "name" : "Jimmy Choo",
    "provider_id" : ObjectId("52ffc33cd85242f436000001"),
    "products_id" : ["JC4340601"]
})

db.product.insertOne({
    "_id" : "JC4340601",
    "name" : "Jimmy Choo Pure Black Glasses",
    "price" : 144.50,
    "brand_id" : ObjectId("12ffc33cd85242f436000000"),
    "specs" : {
        "muntura" : "pasta",
        "color muntura" : "black",
        "color vidre" : "black"
    }
})


db.client.insertOne({
    "_id" : ObjectId("82ffc33cd85242f436000000"),
    "name" : "Tomas",
    "surnames" : "Rodriguez Blanco",
    "contact" : {
        "telf" : "935647896",
        "email" : "tomas@gmail.com"
    },
    "address" : { 
        "street" : "Av Bcn",
        "building" : "131",
        "zipcode" : "08024",
        "city" : "Barcelona",
    },
    "registration" : new Date("2016-05-18T16:00:00Z"),
    "recommended" : "",
    "orders" : [
        {
                "_id" : ObjectId("82ffc33cd45242f436000000"),
                "date" : new Date("2016-05-18T16:00:00Z"),
                "total price" : 289.00,
                "employee" : 
                     { "id_" : ObjectId("80ffc33cd45242f436000000"), 
                    "name" : "Maria"
                    },
                "ordered products" : [
                    {"product_id" : "JC4340601", "qty" : 2, "unit price" : 144.50, "graduation" : { "left" : 0.20, "right" : 0.50 }}
                ]
            } 
    ]
})



db.client.createIndex( { "orders._id": 1 }, { unique: true } )
