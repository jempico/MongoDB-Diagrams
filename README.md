Observaciones:

- Se reduce el número de entidades a 4 colecciones (client, provider, product, brand) dentro de las cuales se incrustan los subdocumentos que sólo pueden entenderse en el contexto del documento padre. 

- La relación uno-muchos entre proveedor y producto se establece en la colección Marca, donde una marca se asocia a un único id de proveedor.