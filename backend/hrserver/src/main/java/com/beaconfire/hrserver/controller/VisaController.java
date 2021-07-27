package com.beaconfire.hrserver.controller;

import com.beaconfire.hrserver.domain.ApplicationWorkFlow;
import com.beaconfire.hrserver.domain.VisaStatus;
import com.beaconfire.hrserver.response.VisaStartResponse;
import com.beaconfire.hrserver.service.S3Services;
import com.beaconfire.hrserver.service.VisaService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("employee/")
public class VisaController {
    @Autowired
    private VisaService visaService;

    @Autowired
    S3Services s3Services;

    //api for visa main page
    @GetMapping("visa/{userId}")
    public VisaStartResponse visaMainPage(@PathVariable String userId){
        // find EmployeeId by using userId
        int employeeId = visaService.getEmployeeIdByUserId(Integer.parseInt(userId));

        VisaStatus visaStatus = visaService.getVisaByEmployeeId(employeeId);
        visaService.preProcessVisa(visaStatus);

        String visaType = visaStatus.getVisaType();
        String status = visaService.getStatus(employeeId);

        VisaStartResponse response = new VisaStartResponse();
        response.setVisaType(visaType);
        response.setStatus(status);
        return response;

    }
    // api for download
    @GetMapping("/visa/download/{keyname}")
    public ResponseEntity downloadFile(@PathVariable String keyname) {
        ByteArrayOutputStream downloadInputStream = s3Services.downloadFile(keyname);

        return ResponseEntity.ok()
                .contentType(contentType(keyname))
                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\"" + keyname + "\"")
                .body(downloadInputStream.toByteArray());
    }

    @PostMapping("visa/optEADUpload")
    public String optreceiptUpload(@RequestParam("file") MultipartFile file) {
        String keyName = file.getOriginalFilename();
        s3Services.uploadFile(keyName, file);

        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 54;
        VisaStatus visaStatus = visaService.getVisaByEmployeeId(employeeId);
        visaStatus.setVisaType("OPT EAD");
        visaService.updateVisaType(visaStatus);
        return "Upload Successfully -> KeyName = " + keyName;
    }

    @GetMapping("visa/optEADUpload/all")
    public List listAllFiles(){
        return s3Services.listFiles();
    }

    @PostMapping("visa/i983templateUpload")
    public String i983templateUpload(@RequestParam("file") MultipartFile file) {
        String keyName = file.getOriginalFilename();
        s3Services.uploadFile(keyName, file);

        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 54;
        ApplicationWorkFlow applicationWorkFlow = visaService.getWorkflowByEmployeeId(employeeId);
        applicationWorkFlow.setStatus("waitforhr");
        visaService.updateStatusWorkflow(applicationWorkFlow);
        return "Upload Successfully -> KeyName = " + keyName;
    }

    @GetMapping("visa/i983templateUpload/all")
    public List listAllFiles1(){
        return s3Services.listFiles();
    }

    @PostMapping("visa/i20Upload")
    public String i20Upload(@RequestParam("file") MultipartFile file) {
        String keyName = file.getOriginalFilename();
        s3Services.uploadFile(keyName, file);

        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 54;
        ApplicationWorkFlow applicationWorkFlow = visaService.getWorkflowByEmployeeId(employeeId);
        applicationWorkFlow.setStatus("newi20");
        visaService.updateStatusWorkflow(applicationWorkFlow);
        return "Upload Successfully -> KeyName = " + keyName;
    }

    @GetMapping("visa/i20Upload/all")
    public List listAllFiles2(){
        return s3Services.listFiles();
    }

    @PostMapping("visa/stemreceiptUpload")
    public String stemreceiptUpload(@RequestParam("file") MultipartFile file) {
        String keyName = file.getOriginalFilename();
        s3Services.uploadFile(keyName, file);

        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 54;
        VisaStatus visaStatus = visaService.getVisaByEmployeeId(employeeId);
        visaStatus.setVisaType("OPT STEM Receipt");
        visaService.updateVisaType(visaStatus);
        return "Upload Successfully -> KeyName = " + keyName;
    }

    @GetMapping("visa/stemreceiptUpload/all")
    public List listAllFiles3(){
        return s3Services.listFiles();
    }

    @PostMapping("visa/stemEADUpload")
    public String stemEADUpload(@RequestParam("file") MultipartFile file) {
        String keyName = file.getOriginalFilename();
        s3Services.uploadFile(keyName, file);

        //Should be able to get employeeID somewhere
        //hard code employeeId;
        int employeeId = 54;
        VisaStatus visaStatus = visaService.getVisaByEmployeeId(employeeId);
        visaStatus.setVisaType("OPT STEM");
        visaService.updateVisaType(visaStatus);
        return "Upload Successfully -> KeyName = " + keyName;
    }

    @GetMapping("visa/stemEADUpload/all")
    public List listAllFiles4(){
        return s3Services.listFiles();
    }

    private MediaType contentType(String keyname) {
        String[] arr = keyname.split("\\.");
        String type = arr[arr.length-1];
        switch(type) {
            case "txt": return MediaType.TEXT_PLAIN;
            case "png": return MediaType.IMAGE_PNG;
            case "jpg": return MediaType.IMAGE_JPEG;
            case "pdf": return MediaType.APPLICATION_PDF;
            default: return MediaType.APPLICATION_OCTET_STREAM;
        }
    }


}
