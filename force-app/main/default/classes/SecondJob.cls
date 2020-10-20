public class SecondJob implements Queueable { 
    public void execute(QueueableContext context) { 
        // Awesome processing logic here    
        // Chain this job to next job by submitting the next job
        System.debug ('---Second JOb----'+enqqueJobCount.cnt);
        //System.enqueueJob(new ThirdJob());
        for (integer i=0; i<50 ;i++){
        System.enqueueJob(new FirstJob());
        }
    }
}