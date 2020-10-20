trigger ProcessAccount on Account (before insert, before update) {
     Set<String> uniqueNames = new Set<String>();
     system.debug('--start trigger--'+ProcessorControl.inFutureContext);
 if (!ProcessorControl.inFutureContext) {
        for (Account a : Trigger.new)
            uniqueNames.add(a.name);

        if (!uniqueNames.isEmpty())
            AccountProcessor.processAccounts(uniqueNames);
    }
}