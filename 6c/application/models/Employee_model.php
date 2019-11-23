<?php
class Employee_model extends CI_model
{
    public function getAllEmployee()
    {
        $query = $this->db->get('coffee_shop');
        return $query->result_array();
    }
    public function tambahDataEmployee()
    {
        $data = [
            "Cashier" => $this->input->post("Cashier"),
            "Product" => $this->input->post("Product"),
            "Category" => $this->input->post("Category"),
            "Price" => $this->input->post("Price")
        ];
        $this->db->insert('coffee_shop', $data);
        redirect('employee');
    }
    public function hapusDataMahasiswa($No)
    {
        $this->db->where('No', $No);
        $this->db->delete('coffee_shop');
    }
}
