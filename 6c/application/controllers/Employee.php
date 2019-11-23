<?php
class Employee extends CI_Controller
{

    public function index()
    {
        $this->load->model('Employee_model');
        $data['employee'] = $this->Employee_model->getAllEmployee();
        $this->load->view('templates/header');
        $this->load->view('employee/index', $data);
        $this->load->view('templates/footer');
    }
    public function tambah()
    {
        $this->load->view('templates/header');
        $this->load->view('employee/tambah');
        $this->load->view('templates/footer');
        // $this->Employee_model->tambahDataEmployee();
        // redirect('employee');
    }
    public function hapus($No)
    {
        $this->Employee_model->hapusDataMahasiswa($No);
        redirect('employee');
    }
}
