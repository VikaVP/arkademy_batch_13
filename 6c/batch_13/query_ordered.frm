TYPE=VIEW
query=select `batch_13`.`cashier`.`cashier` AS `cashier`,`batch_13`.`product`.`product` AS `product`,`batch_13`.`category`.`category` AS `category`,`batch_13`.`product`.`price` AS `price` from `batch_13`.`cashier` join `batch_13`.`product` join `batch_13`.`category` where `batch_13`.`product`.`id_category` = `batch_13`.`category`.`id` and `batch_13`.`product`.`id_cashier` = `batch_13`.`cashier`.`id`
md5=056ae2494d8b6c1b55dc072e5b9540db
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2019-11-22 22:01:44
create-version=2
source=SELECT cashier.cashier, product.product,\ncategory.category, product.price\nFROM cashier, product, category\nWHERE product.id_category=category.id\nAND product.id_cashier=cashier.id
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_unicode_ci
view_body_utf8=select `batch_13`.`cashier`.`cashier` AS `cashier`,`batch_13`.`product`.`product` AS `product`,`batch_13`.`category`.`category` AS `category`,`batch_13`.`product`.`price` AS `price` from `batch_13`.`cashier` join `batch_13`.`product` join `batch_13`.`category` where `batch_13`.`product`.`id_category` = `batch_13`.`category`.`id` and `batch_13`.`product`.`id_cashier` = `batch_13`.`cashier`.`id`
mariadb-version=100316
