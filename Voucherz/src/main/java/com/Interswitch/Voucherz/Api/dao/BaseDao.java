package com.Interswitch.Voucherz.Api.dao;

import java.util.List;

public interface BaseDao<M> {

    public M create(M model);

    public M Update(M model);

    public M retrieve(Long id);

    public List<M> retrieveAll();

    public boolean delete(M model);

}
