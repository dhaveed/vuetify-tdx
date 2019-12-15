<template>
  <!-- Report Modal -->
  <div
    class="modal fade"
    id="report"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="examplereportLongTitle">Report Abuse</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="report-name"
              placeholder="Enter url"
            />
          </div>
          <div class="form-group">
            <select
              name="country"
              id="select-countries2"
              class="form-control custom-select"
            >
              <option value="1" selected>Categories</option>
              <option value="2">RealEstatem</option>
              <option value="3">Identity Theft</option>
              <option value="4">Online Shopping Fraud</option>
              <option value="5">Service Providers</option>
              <option value="6">Phishing</option>
              <option value="7">Spyware</option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="report-email"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group mb-0">
            <textarea
              class="form-control"
              name="example-textarea-input"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Report Modal -->
</template>

<script>
export default {
  name: "ReportModal"
};
</script>

<style></style>
