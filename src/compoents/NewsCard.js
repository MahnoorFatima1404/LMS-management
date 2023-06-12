import React from "react";

function NewsCard(props) {
  return (
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={props.news}
                class=" rounded-start ht"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Scholarships</h5>
                <p class="card-text">
                ELIT DUIED AIUSMOD TEMPOR DID LABORE DOLORY AIUSMOD TEMPOR DID.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewsCard;
