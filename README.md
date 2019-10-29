# nodejs-simple-api

# DEPEDENCIES { express, mysql, body-parser, nodemon }

# DATABASE
# import testing.sql

# END POINT
# get all products [GET] - http://localhost:3001/products
# get products by id [GET] - http://localhost:3001/product/{id}

# insert record [POST] - http://localhost:3001/product
{
	"product_name": "Produk Palsu 2",
	"product_price": 350000,
}

# update record [PUT] - http://localhost:3001/product

{
	"product_name": "Produk Palsu 2",
	"product_price": 350000,
	"product_idx": 11
}

# delete record [DELETE] - http://localhost:3001/product
{	
	"product_idx": 11
}