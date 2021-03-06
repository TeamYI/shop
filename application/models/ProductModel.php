<?php

class ProductModel extends CI_Model{

    public function __construct(){
        parent::__construct();

    }

    function selectAllProduct(){
        $query = $this->db->query("SELECT * FROM product order by product_date desc");

        return $query->result_array();
    }

    function selectProduct($code){

        $query = $this->db->query("SELECT * FROM product WHERE product_code='$code'");
        return $query->row();


    }

    function selectCategory($category_code){
        $query = $this->db->query("select * from product as a join category as b on a.category_code=b.category_code  where b.category_code='$category_code' order by product_date desc");

        return $query->result_array();
    }

    function searchAllProduct($search){
        $query = $this->db->query("SELECT * FROM product where product_name like '%$search%'");

        return $query->result();
    }

    function selectNewProduct(){
        $query = $this->db->query("select * from product order by product_date desc limit 6");

        return $query->result();

    }



}

?>
