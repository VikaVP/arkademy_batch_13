<div class="container">
    <table class="table table-sm" style="border: 1; margin: auto;">
        <thead class="table-secondary">
            <tr>
                <a style="margin: 20px;" href="<?= base_url(); ?>employee/tambah" class="btn btn-primary">ADD</a>
                <th scope="col">No</th>
                <th scope="col">Cashier</th>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($employee as $emp) : ?>
                <tr>
                    <th scope="row"><?= $emp['No']; ?></th>
                    <td><?= $emp['Cashier']; ?></td>
                    <td><?= $emp['Product']; ?></td>
                    <td><?= $emp['Category']; ?></td>
                    <td><?= $emp['Price']; ?></td>
                    <td> <a href="" style="color: greenyellow;">Edit</a> | <a href="<?= base_url(); ?>employee/hapus" style="color: red;" onclick="return confirm('yakin?');">Delete</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>