conn = new Mongo("localhost");
db = conn.getDB("optica_jempi_mo");

db.createCollection('provider')
db.createCollection('client')
db.createCollection('product')
db.createCollection('brand')


db.provider.insertOne({
    "_id" : "ProOpt",
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
    "_id" : "JC",
    "name" : "Jimmy Choo",
    "provider_id" : "ProOpt",
    "products_id" : ["JC4340601"]
})

db.product.insertOne({
    "_id" : "JC4340601",
    "name" : "Jimmy Choo Pure Black Glasses",
    "price" : "144.50",
    "brand" : "Jimmy Choo",
    "specs" : {
        "muntura" : "pasta",
        "color muntura" : "black",
        "color vidre" : "black"
    }
})


db.client.insertOne({
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
    "registration" : ISODate("2013-10-02T01:11:18.965Z"),
    "recommended" : "",
    "orders" : [
        {
                "_id" : "order111",
                "date" : ISODate("2013-10-02T01:11:18.965Z"),
                "total price" : "289",
                "employee" : "Maria",
                "ordered products" : [
                    {"product_id" : "JC4340601", "qty" : "2", "unit price" : "144.50", "graduation" : { "left" : "0.20", "right" : "0.50" }}
                ]
            } 
    ]
})



