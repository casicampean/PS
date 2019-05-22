package application.controller;

import java.util.List;

import application.model.Account;
import application.repository.AccountRepository;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    private final AccountRepository accountRepository;

    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @GetMapping("/accounts")
    public List<Account> getAccounts(){
        return (List<Account>) accountRepository.findAll();
    }

    @PostMapping("/accounts")
    void addAccount(@RequestBody Account account) {
        accountRepository.save(account);
    }

}