public class FirstJob implements Queueable { 
    public void execute(QueueableContext context) { 
        // Awesome processing logic here    
        // Chain this job to next job by submitting the next job
        System.debug ('---First JOb----');
        System.enqueueJob(new SecondJob());
        // NOT ALLOWED MORE THAN ONEE JOB TO ENQUEUE
        //System.enqueueJob(new ThirdJob());
        //System.enqueueJob(new FourthJob());
        //Test
    }
}
