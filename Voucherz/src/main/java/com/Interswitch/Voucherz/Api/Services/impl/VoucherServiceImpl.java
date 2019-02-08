package com.Interswitch.Voucherz.Api.Services.impl;

import com.Interswitch.Voucherz.Api.Model.Voucher;
import com.Interswitch.Voucherz.Api.Model.VoucherRequest;
import com.Interswitch.Voucherz.Api.Services.VoucherService;
import com.Interswitch.Voucherz.Api.Utils.codeUtil;
import com.Interswitch.Voucherz.Api.dao.VoucherDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class VoucherServiceImpl implements VoucherService {
    @Autowired
    VoucherDao voucherDao;

  //  private VoucherRequest voucherRequest;

    @Override
    public Voucher createVoucher(@RequestBody @Validated final VoucherRequest voucherRequest, @PathVariable String email) {
        Voucher voucher = new Voucher();
        try {
            voucher.setVoucherType(voucherRequest.getVoucherType());
            voucher.setCategory(voucherRequest.getCategory());
            voucher.setStartDate(voucherRequest.getStartDate());
            voucher.setExpiryDate(voucherRequest.getExpiryDate());
            voucher.setPrefix(voucherRequest.getPrefix());
            voucher.setSuffix(voucherRequest.getSuffix());
            voucher.setLength(voucherRequest.getLength());
            voucher.setNumOfCode(voucherRequest.getNumOfCode());
            voucher.setCharSet(voucherRequest.getCharSet());
            voucher.setCodeValue(voucherRequest.getCodeValue());
            voucher.setAdditionalInfo(voucherRequest.getAdditionalInfo());
            voucher.setEmail(email);

            int GenLengthOfCode = voucherRequest.getLength();

            if (voucherRequest.getCharSet().equalsIgnoreCase("Alphabet")) {
               String genCode = codeUtil.randomAlphabet(GenLengthOfCode);
                String genVoucher = voucherRequest.getPrefix() + genCode + voucherRequest.getSuffix();
                voucher.setCode(genVoucher);
                voucherDao.create(voucher);
            }else if(voucher.getCharSet().equalsIgnoreCase("AlphaNumeric")){
                String genCode = codeUtil.randomAlphaNumeric(GenLengthOfCode);
                String genVoucher = voucher.getPrefix() + genCode + voucher.getSuffix();
                voucher.setCode(genVoucher);
                voucherDao.create(voucher);
            }else if(voucher.getCharSet().equalsIgnoreCase("Integer")){
                String genCode = codeUtil.randomInteger(GenLengthOfCode);
                String genVoucher = voucher.getPrefix() + genCode + voucher.getSuffix();
                voucher.setCode(genVoucher);
                voucherDao.create(voucher);
            }
            else{
                System.out.println("Please enter a valid Charset");
            }


        }catch(NullPointerException e){

        }

        return null ;
    }

    @Override
    public Voucher updateVoucher(Voucher voucher) {
        return voucherDao.Update(voucher);
    }

    @Override
    public Voucher retrieveVoucher(long id) {
        return voucherDao.retrieve(id);
    }

    @Override
    public List<Voucher> retrieveByType(int voucherTypeId) {
        return voucherDao.retrieveByType(voucherTypeId);
    }

    @Override
    public List retrieveAllVoucher() {
        return voucherDao.retrieveAll();
    }

    @Override
    public Voucher retrieveVoucherByCode(String code) {
        return voucherDao.retrieveByCode(code);

    }

    public Voucher retrieveVoucherByMerchant(String email){
        return voucherDao.retrieveByEmail(email);
    }
}
