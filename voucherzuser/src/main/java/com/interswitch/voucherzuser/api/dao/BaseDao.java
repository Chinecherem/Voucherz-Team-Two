package com.interswitch.voucherzuser.api.dao;

import java.util.List;

public interface BaseDao<M> {
    public M create(M model);

    public boolean update(M model);

    public M find(long Id);

    public List<M> findAll();

    //public boolean delete(M Model);
}
