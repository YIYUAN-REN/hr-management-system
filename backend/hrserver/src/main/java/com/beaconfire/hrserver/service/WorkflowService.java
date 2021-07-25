package com.beaconfire.hrserver.service;

import com.beaconfire.hrserver.dao.WorkflowDAO;
import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class WorkflowService {
    private WorkflowDAO workflowDAO;
    @Autowired
    public void setWorkflowDAO(WorkflowDAO workflowDAO){this.workflowDAO = workflowDAO;}
    @Transactional
    public void addWorkflow(ApplicationWorkFlow workflow){
        this.workflowDAO.addWorkflow(workflow);
    }

    public List<ApplicationWorkFlow> getWorkflowByStatus(String state){return workflowDAO.getWorkflowByStatus(state);}
}
