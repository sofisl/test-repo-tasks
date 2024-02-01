import { CloudTasksClient } from '@google-cloud/tasks'; 
const tasksClient = new CloudTasksClient(); 

function main(parent: string) {
    // [START cloudtasks_v2_generated_CloudTasks_ListQueues_async]
    /**
     * This snippet has been automatically generated and should be regarded as a code template only.
     * It will require modifications to work.
     * It may require correct/in-range values for request initialization.
     * TODO(developer): Uncomment these variables before running the sample.
     */
    /**
     *  Required. The location name.
     *  For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     */
    // const parent = 'abc123'
    /**
     *  `filter` can be used to specify a subset of queues. Any Queue google.cloud.tasks.v2.Queue
     *  field can be used as a filter and several operators as supported.
     *  For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
     *  described in
     *  Stackdriver's Advanced Logs
     *  Filters (https://cloud.google.com/logging/docs/view/advanced_filters).
     *  Sample filter "state: PAUSED".
     *  Note that using filters might cause fewer queues than the
     *  requested page_size to be returned.
     */
    // const filter = 'abc123'
    /**
     *  Requested page size.
     *  The maximum page size is 9800. If unspecified, the page size will
     *  be the maximum. Fewer queues than requested might be returned,
     *  even if more queues exist; use the
     *  next_page_token google.cloud.tasks.v2.ListQueuesResponse.next_page_token  in the
     *  response to determine if more queues exist.
     */
    // const pageSize = 1234
    /**
     *  A token identifying the page of results to return.
     *  To request the first page results, page_token must be empty. To
     *  request the next page of results, page_token must be the value of
     *  next_page_token google.cloud.tasks.v2.ListQueuesResponse.next_page_token  returned
     *  from the previous call to ListQueues google.cloud.tasks.v2.CloudTasks.ListQueues
     *  method. It is an error to switch the value of the
     *  filter google.cloud.tasks.v2.ListQueuesRequest.filter  while iterating through pages.
     */
    // const pageToken = 'abc123'

    async function callListQueues() {
      // Construct request
      const request = {
        parent,
      };
  
      // Run request
      const iterable = await tasksClient.listQueuesAsync(request);
      for await (const response of iterable) {
        console.log(response);
      }
    }
  
    callListQueues();
    // [END cloudtasks_v2_generated_CloudTasks_ListQueues_async]
  }
  
  process.on('unhandledRejection', err => {
    process.exitCode = 1;
  });
  main(process.argv.slice(2)[0]);