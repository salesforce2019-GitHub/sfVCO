public class ThirdJob implements Queueable { 
    public void execute(QueueableContext context) { 
        // Awesome processing logic here    
        // Chain this job to next job by submitting the next job
        System.debug ('---Third JOb----');
        //System.enqueueJob(new SecondJob());
    }
}