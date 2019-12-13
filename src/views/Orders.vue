<template>
<section class="sptb">
			<div class="container" style="padding-top: 70px;">
				<div class="row">
                    <sidebar></sidebar>
  <div class="col-xl-9 col-lg-12 col-md-12">
						
						<div class="card mb-0">
							<div class="card-header">
								<h3 class="card-title">Orders List</h3>
							</div>
							<div class="card-body">
								<div class="table-responsive border-top">
									<table class="table table-bordered table-hover text-nowrap">
										<thead>
											<tr>
												<th>Order ID</th>
												<th>Category</th>
												<th>Date</th>
												<th>Price</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-primary">#89345</td>
												<td>Apartments</td>
												<td>07-12-2019</td>
												<td class="font-weight-semibold fs-16">$893</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#39281</td>
												<td>Electorincs</td>
												<td>12-11-2019</td>
												<td class="font-weight-semibold fs-16">$254</td>
												<td>
													<a href="#" class="badge badge-primary">Completed</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#35825</td>
												<td>Modren Houses</td>
												<td>15-11-2019</td>
												<td class="font-weight-semibold fs-16">$352</td>
												<td>
													<a href="#" class="badge badge-success">Activated</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#62391</td>
												<td>Homes</td>
												<td>10-11-2019</td>
												<td class="font-weight-semibold fs-16">$643</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#92481</td>
												<td>Duplex House</td>
												<td>07-11-2019</td>
												<td class="font-weight-semibold fs-16">$392</td>
												<td>
													<a href="#" class="badge badge-primary">Activated</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#29381</td>
												<td>Laxury Rooms</td>
												<td>31-10-2019</td>
												<td class="font-weight-semibold fs-16">$295</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#72356</td>
												<td>3BHk Homes</td>
												<td>27-10-2019</td>
												<td class="font-weight-semibold fs-16">$836</td>
												<td>
													<a href="#" class="badge badge-primary">Activated</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#89345</td>
												<td>2BHK Homes</td>
												<td>30-11-2019</td>
												<td class="font-weight-semibold fs-16">$254</td>
												<td>
													<a href="#" class="badge badge-success">Completed</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#4570</td>
												<td> Homes</td>
												<td>03-12-2019</td>
												<td class="font-weight-semibold fs-16">$654</td>
												<td>
													<a href="#" class="badge badge-primary">Activated</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<ul class="pagination">
									<li class="page-item page-prev disabled">
										<a class="page-link" href="#" tabindex="-1">Prev</a>
									</li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item page-next">
										<a class="page-link" href="#">Next</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
</section>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
    components: {
        sidebar
    }
}
</script>

<style>

</style>